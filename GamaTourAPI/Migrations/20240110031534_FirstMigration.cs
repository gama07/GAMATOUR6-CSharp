using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GAMATOUR.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "destinations",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    destinations_name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    departure_date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    return_date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    number_of_passengers = table.Column<int>(type: "int", nullable: false),
                    destinations_price = table.Column<decimal>(type: "decimal(65,30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_destinations", x => x.id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "destinations",
                columns: new[] { "id", "departure_date", "destinations_name", "number_of_passengers", "destinations_price", "return_date" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Maldivas", 3, 1000.00m, new DateTime(2024, 2, 10, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, new DateTime(2024, 3, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Taj Mahal", 4, 800.00m, new DateTime(2024, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, new DateTime(2024, 4, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hong Kong", 2, 1200.00m, new DateTime(2024, 4, 27, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, new DateTime(2024, 5, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Machu Picchu", 1, 900.00m, new DateTime(2024, 5, 17, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5, new DateTime(2024, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Grécia", 5, 1500.00m, new DateTime(2024, 6, 15, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 6, new DateTime(2024, 7, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "Islândia", 2, 1300.00m, new DateTime(2024, 7, 19, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "destinations");
        }
    }
}
