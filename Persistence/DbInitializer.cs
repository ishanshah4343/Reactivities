using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DbInitializer
    {
        public static async Task SeedData(AppDbContext context)
        {
            if (context.Activities.Any())
            {
                return; // DB has been seeded
            }

            var activities = new List<Activity>
            {
                new() {
                    Title = "Past Activity 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Activity 2 months ago",
                    Category = "drinks",
                    City = "London",
                    Venue = "Pub",
                    Latitude = 51.5074,
                    Longitude = -0.1278
                },
                new() {
                    Title = "Past Activity 2",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Category = "culture",
                    City = "Paris",
                    Venue = "Museum",
                    Latitude = 48.8566,
                    Longitude = 2.3522
                },
                new() {
                    Title = "Future Activity 1",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Activity in 1 month",
                    Category = "music",
                    City = "Berlin",
                    Venue = "Concert Hall",
                    Latitude = 52.5200,
                    Longitude = 13.4050
                },
                new() {
                    Title = "Future Activity 2",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Activity in 2 months",
                    Category = "sports",
                    City = "Madrid",
                    Venue = "Stadium",
                    Latitude = 40.4168,
                    Longitude = -3.7038
                },
                new() {
                    Title = "Future Activity 3",
                    Date = DateTime.UtcNow.AddMonths(3),
                    Description = "Activity in 3 months",
                    Category = "theater",
                    City = "Rome",
                    Venue = "Opera House",
                    Latitude = 41.9028,
                    Longitude = 12.4964
                }
            };

            context.Activities.AddRange(activities);

            await context.SaveChangesAsync();
        }
    }
}