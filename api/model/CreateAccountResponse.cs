using System;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{    

  public class CreateAccountResponse : BaseResponse{
  private  string customerId;
  public string CustomerId
    {
        get { return customerId; }
        set { customerId = value; }
    }

}
}