using GamaTour.Model;
using Microsoft.EntityFrameworkCore;

namespace GamaTour.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            GamaTour = Set<Destinations>();  
        }

        public DbSet<Destinations> GamaTour { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            _ = modelBuilder.Entity<Destinations>().HasData(
                new Destinations { Id = 1, Name = "Maldivas", DepartureDate = DateTime.Parse("2024-02-01"), ReturnDate = DateTime.Parse("2024-02-10"), NumberOfPassengers = 3, Price = 1000.00m },
                new Destinations { Id = 2, Name = "Taj Mahal", DepartureDate = DateTime.Parse("2024-03-15"), ReturnDate = DateTime.Parse("2024-03-22"), NumberOfPassengers = 4, Price = 800.00m },
                new Destinations { Id = 3, Name = "Hong Kong", DepartureDate = DateTime.Parse("2024-04-20"), ReturnDate = DateTime.Parse("2024-04-27"), NumberOfPassengers = 2, Price = 1200.00m },
                new Destinations { Id = 4, Name = "Machu Picchu", DepartureDate = DateTime.Parse("2024-05-10"), ReturnDate = DateTime.Parse("2024-05-17"), NumberOfPassengers = 1, Price = 900.00m },
                new Destinations { Id = 5, Name = "Grécia", DepartureDate = DateTime.Parse("2024-06-05"), ReturnDate = DateTime.Parse("2024-06-15"), NumberOfPassengers = 5, Price = 1500.00m },
                new Destinations { Id = 6, Name = "Islândia", DepartureDate = DateTime.Parse("2024-07-12"), ReturnDate = DateTime.Parse("2024-07-19"), NumberOfPassengers = 2, Price = 1300.00m }
            );
        }
    }
}
