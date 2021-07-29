using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class UserDetails : BaseResponse{

        private string userEmail;
        private string password;
        private string confirmPassword;
        private string customerId;

        [Required]
        public string UserEmail
        {
            get { return userEmail; }
            set { userEmail = value; }
        }

        [Required]
        public string Password
        {
            get { return password; }
            set { password = value; }
        }

        [Required]
        public string ConfirmPassword
        {
            get { return confirmPassword; }
            set { confirmPassword = value; }
        }

        [Required]
        public string CustomerId
        {
            get { return customerId; }
            set { customerId = value; }
        }
    }
}