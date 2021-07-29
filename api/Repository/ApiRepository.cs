using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Model;
using MongoDB.Driver;

namespace api.Repository
{
    public class ApiRepository : IApiRepository
    {
        public ApiRepository()
        {
            
        }
        public ApplicationDbContext AppDbContext {get;set;}
        public async Task<UserDetails> AuthenticateUserAsync(SignInRequest request)
        {
           var users = await AppDbContext.UserDetails.FindAsync(request.UserEmail);
            if(users != null)
            {
                var matchedUser = await GetUser(request.UserEmail);                
                if(matchedUser != null)
                {
                    bool isPasswordMatched = matchedUser.Password == request.Password;
                    if(isPasswordMatched)
                    {
                        matchedUser.Success = true;
                        return await Task.FromResult(matchedUser);
                    }
                    else
                    {
                    return await Task.FromResult(new UserDetails(){Success = true, Error="Invalid Password"});
                    }
                }
                else
                {
                return await Task.FromResult(new UserDetails(){Success = true, Error="User deos not exists"});
                }

            }
            return await Task.FromResult(new UserDetails(){ Success = false, Error = "Unable to log in."});
    }

        private async Task<UserDetails> GetUser(string userEmail)
        {
            var user = await AppDbContext.UserDetails.FindAsync(userEmail);
            return user;
        }

        public Task<ResetPasswordResponse> ResetPasswordAsync(ResetPasswordRequest request)
        {
            var user = GetUser(request.UserEmail);
            if(user != null)
            {
                var userDetails = new UserDetails() {
                    Password = request.Password,
                    ConfirmPassword = request.ConfirmPassword,
                    UserEmail = request.UserEmail
                };
                AppDbContext.UserDetails.Update(userDetails);
                AppDbContext.SaveChanges();

                return Task.FromResult(new ResetPasswordResponse(){
                    Error = "",
                    Success = true
                });
            }

             return Task.FromResult(new ResetPasswordResponse(){
                    Error = "Unable to find the user",
                    Success = true
                });
        }
        public async Task<CreateAccountResponse> CreateAccountAsync(CreateAccountRequest request)
        {            
            var matchedUser = GetUser(request.CreateAccountDetails.UserName);
            if(matchedUser ==  null)
            {                            
                var userDetails = new UserDetails(){
                    UserEmail = request.CreateAccountDetails.UserName,                   
                    CustomerId = GenerateCustomerId()
                };

                await AppDbContext.UserDetails.AddAsync(userDetails);

                request.CreateAccountDetails.CustomerId = userDetails.CustomerId;
                await AppDbContext.AccountDetials.AddAsync(request.CreateAccountDetails);

                return new CreateAccountResponse() 
                {
                    CustomerId = userDetails.CustomerId, 
                    Error="", 
                    Success= true
                };
            }
            else
            {                 
                return new CreateAccountResponse() 
                {
                    CustomerId = "", 
                    Error="User already exists. Please user different email",
                    Success= true
                };
            }
        }

        public string GenerateCustomerId()
        {
            var randomNumber = new Random().NextDouble() * 1000;
            return "R-" + randomNumber.ToString();
        }

        public async Task<UpdateAccountResponse> UpdateAccountAsync(CreateAccountRequest request)
        {
            var response = new UpdateAccountResponse();
            var accountDetails = await AppDbContext.AccountDetials.FindAsync(request.CreateAccountDetails.CustomerId);
            if(accountDetails != null)
            {
                AppDbContext.AccountDetials.Update(request.CreateAccountDetails);
                AppDbContext.SaveChanges();
                response.Success = true;
                response.Error ="";
                response.CreateAccountDetails = accountDetails;
            }
            else
            {
                response.Success = true;
                response.Error ="There is no such account found";
                response.CreateAccountDetails = new AccountDetails();
            }

            return response;
        }
        public async Task<AccountDetails> GetAccountDetails(string request)
        {
            return await AppDbContext.AccountDetials.FindAsync(request);
        }

        public async Task<LoanResponse> ApplyLoan(LoanRequest request)
        {
            var loanType =  request.LoanType;
            if(loanType == "Personal Loan" || loanType == "House Loan")
            {
                var loanDetails = new LoanDetails() {
                    CustomerId = request.CustomerId,
                    LoanAmount = request.LoanAmount,
                    LoanApplyDate = request.LoanApplyDate,
                    LoanId = (new Random()).ToString(),
                    LoanDuration = request.LoanDuration,
                    LoanIssueDate = request.LoanIssueDate,
                    LoanType = loanType,
                    RateOfInterest = request.RateOfInterest
                };
                await AppDbContext.LoanDetails.AddAsync(loanDetails);

                if(request.PersonalLoan != null)
                {                    
                    await AppDbContext.PersonalLoan.AddAsync(new PersonalLoan() {

                        AnnualIncome = request.PersonalLoan.AnnualIncome,
                         CompanyName = request.PersonalLoan.CompanyName,
                        CurrentExperience = request.PersonalLoan.CurrentExperience,
                        Designation = request.PersonalLoan.Designation,
                        TotalExprience = request.PersonalLoan.TotalExprience,
                        LoanId = loanDetails.LoanId
                    });
                }
            }

            if(loanType == "Educatio Loan")
            {
                var loanDetails = new LoanDetails() {
                    CustomerId = request.CustomerId,
                    LoanAmount = request.LoanAmount,
                    LoanApplyDate = request.LoanApplyDate,
                    LoanId = (new Random()).ToString(),
                    LoanDuration = request.LoanDuration,
                    LoanIssueDate = request.LoanIssueDate,
                    LoanType = loanType,
                    RateOfInterest = request.RateOfInterest
                };
                await AppDbContext.LoanDetails.AddAsync(loanDetails);

                if(request.EducationLoan != null)
                {                    
                    await AppDbContext.EducationLoan.AddAsync(new EducationLoan() {
                        Course = request.EducationLoan.Course,
                        CourseFee = request.EducationLoan.CourseFee,
                        FatherCurrentExp = request.EducationLoan.FatherCurrentExp,
                        FatherName = request.EducationLoan.FatherName,
                        FatherOccupation = request.EducationLoan.FatherOccupation,
                        FatherTotalExp = request.EducationLoan.FatherTotalExp,
                        LoanId = loanDetails.LoanId
                    });
                }
            }

            var response = new LoanResponse();

            var loanList = AppDbContext.LoanDetails.Where(loan => loan.CustomerId.Equals(request.CustomerId)).ToList();
            if(loanList != null )
            {
                var personalLoans = loanList.Where(loan => loan.LoanType.Contains("Personal") || loan.LoanType.Contains("House")).ToList();

                if(personalLoans != null)
                {
                    response.PersonalLoans = new List<PersonalLoan>();
                    personalLoans.ForEach(async loan => {

                        var matchedLoan = await AppDbContext.PersonalLoan.FindAsync(loan.LoanId);
                        if(matchedLoan != null)
                        {
                            response.PersonalLoans.Add(matchedLoan);
                        }
                        
                    });
                }

                var educationLoans = loanList.Where(loan => loan.LoanType.Contains("Education")).ToList();
                if(educationLoans != null)
                {
                    response.EducationLoans = new List<EducationLoan>();
                    educationLoans.ForEach(async loan => {

                        var matchedLoan = await AppDbContext.EducationLoan.FindAsync(loan.LoanId);
                        if(matchedLoan != null)
                        {
                            response.EducationLoans.Add(matchedLoan);
                        }
                        
                    });
                }
                
                response.Success = true;
                response.Error = "";

                return response;
            }
            else
            {
                response.Success = true;
                response.Error = "There is no loan for this customer, please apply loan";
                return response;
            }
        }
    }
}