using System;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class AccountDetails {
    private  string name;
    private  string id;
    private  string customerId;
    private  string password;
    private  string userEmail;
    private string userName;
    private long userMobile;
    private string userDOB;
    private string userAddress;
    private string userState;
    private string userCountry;
    private string userCitizenship;
    private string userCitizenStatus;
    private string userGender;
    private string userDocProof;
    private string userDocNo;
    private string userAccountType;
    private string userBranchNamne;
    private string userDepositAmount;
    private string userRegDate;
    private string userRefAccHolderName;
    private string userAccHolderAddress;
    private string userGuardianType;
    private string userGuardianName;
    private string userMaritalStatus;

    public string Id
      {
          get { return id; }
          set { id = value; }
      }

       [Required]
        public string CustomerId
        {
            get { return customerId; }
            set { customerId = value; }
        }
      
      [Required]
        public string UserEmail
        {
            get { return userEmail; }
            set { userEmail = value; }
        }

    [Required]
    public string Name
      {
          get { return name; }
          set { name = value; }
      }
        [Required]
    public string Password
      {
          get { return password; }
          set { password = value; }
      }
    [Required]
      public string UserName
      {
          get { return userName; }
          set { userName = value; }
      }  
    [Required]
      public long UserMobile
      {
          get { return userMobile; }
          set { userMobile = value; }
      }
    [Required]
      public string UserDOB
      {
          get { return userDOB; }
          set { userDOB = value; }
      }
        [Required]
      public string UserAddress
      {
          get { return userAddress; }
          set { userAddress = value; }
      } 
    [Required]
      public string UserState
      {
          get { return userState; }
          set { userState = value; }
      }
    [Required]
      public string UserCountry
      {
          get { return userCountry; }
          set { userCountry = value; }
      }
    [Required]
      public string UserCitizenship
      {
          get { return userCitizenship; }
          set { userCitizenship = value; }
      }  
    [Required]
      public string UserCitizenStatus
      {
          get { return userCitizenStatus; }
          set { userCitizenStatus = value; }
      } 
    [Required]
      public string UserGender
      {
          get { return userGender; }
          set { userGender = value; }
      }  
        [Required]
      public string UserDocProof
      {
          get { return userDocProof; }
          set { userDocProof = value; }
      }
    [Required]
      public string UserDocNo
      {
          get { return userDocNo; }
          set { userDocNo = value; }
      }  
    [Required]
      public string UserAccountType
      {
          get { return userAccountType; }
          set { userAccountType = value; }
      } 
    [Required]
      public string UserBranchNamne
      {
          get { return userBranchNamne; }
          set { userBranchNamne = value; }
      }
    [Required]
      public string UserDepositAmount
      {
          get { return userDepositAmount; }
          set { userDepositAmount = value; }
      }
    [Required]
      public string UserRegDate
      {
          get { return userRegDate; }
          set { userRegDate = value; }
      }
    [Required]
      public string UserRefAccHolderName
      {
          get { return userRefAccHolderName; }
          set { userRefAccHolderName = value; }
      }
    [Required]
      public string UserAccHolderAddress
      {
          get { return userAccHolderAddress; }
          set { userAccHolderAddress = value; }
      }
    [Required]
      public string UserGuardianType
      {
          get { return userGuardianType; }
          set { userGuardianType = value; }
      }
    [Required]
      public string UserGuardianName
      {
          get { return userGuardianName; }
          set { userGuardianName = value; }
      }
    [Required]
      public string UserMaritalStatus
      {
          get { return userMaritalStatus; }
          set { userMaritalStatus = value; }
      }
    }
}