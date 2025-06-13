//This code helps calculate the cost of a boda boda (motorcycle taxi) ride.

// It starts with a base fare of KES 50, which is the minimum cost for any trip.
// Then, it adds an extra KES 15 for every kilometer you travel.
// The code first checks if the distance you entered is a valid number. If it's not, it tells you to enter a correct one.
// It adds the base fare and the per-kilometer charge to give you the total estimated fare.


function calculateBodaFare(distanceInKm) {
  const baseFare = 50; 
  const chargePerKm = 15; 

  if (typeof distanceInKm !== 'number' || isNaN(distanceInKm) || distanceInKm < 0) {
    return "Invalid input. Please enter a valid distance in kilometers.";
  }

  const totalFare = baseFare + (distanceInKm * chargePerKm);

  return `The estimated boda boda fare for ${distanceInKm} km is KES ${totalFare}.`;
}

// You can call the function directly like this:
console.log(calculateBodaFare(7)); // Example: For a 7 km trip
console.log(calculateBodaFare(12.5)); // Example: For a 12.5 km trip