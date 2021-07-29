using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class initalMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccountDetails",
                columns: table => new
                {
                    CustomerId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserMobile = table.Column<long>(type: "bigint", nullable: false),
                    UserDOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserStateEnum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserCountryEnum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserCitizenship = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserCitizenStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserGender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDocProof = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDocNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAccountType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserBranchNamne = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDepositAmount = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserRegDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserRefAccHolderName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAccHolderAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserGuardianType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserGuardianName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserMaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountDetails", x => x.CustomerId);
                });

            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    UserEmail = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CustomerId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Success = table.Column<bool>(type: "bit", nullable: false),
                    Error = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.UserEmail);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountDetails");

            migrationBuilder.DropTable(
                name: "UserDetails");
        }
    }
}
