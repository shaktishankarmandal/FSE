namespace api.Model
{
    public class UpdateAccountResponse: CreateAccountRequest{

        public string Error {get;set;}
        public bool Success {get;set;}
    }
}