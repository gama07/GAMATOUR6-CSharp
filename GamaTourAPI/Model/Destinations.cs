using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GamaTour.Model
{
    [Table("destinations")]
    public class Destinations
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("destinations_name")]
    
        public string Name { get; set; } = string.Empty;

        [Column("departure_date")]
        [DataType(DataType.Date)]
        public DateTime DepartureDate { get; set; }

        [Column("return_date")]
        [DataType(DataType.Date)]
        public DateTime ReturnDate { get; set; }

        [Column("number_of_passengers")]
        public int NumberOfPassengers { get; set; }

        [Column("destinations_price")]
        public decimal Price { get; set; }
    }
}
