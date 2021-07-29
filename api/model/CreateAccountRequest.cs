using System;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class CreateAccountRequest: EntityModel{
    
      public AccountDetails CreateAccountDetails {get;set;}
      public CreateAccountRequest()
      {
        CreateAccountDetails = new AccountDetails();
      }
  }
}
