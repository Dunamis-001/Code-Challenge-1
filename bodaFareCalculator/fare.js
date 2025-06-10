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