"use client";
import { useState, useEffect } from "react";

interface Location {
  latitude: number | null;
  longitude: number | null;

}

const lokasiSalah = {
  lati: -6.4815069,
  long: 107.0166179,
};

const lokasiMq = {
  lati:  -6.4749372,
  long: 106.983098,
};

const ALLOWED_LOCATION = {
  latitude: lokasiSalah.lati, // ganti dengan latitude lokasi MQ
  longitude: lokasiSalah.long, // ganti dengan longitude lokasi MQ
  radius: 600,
};

const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371e3; // Radius Bumi dalam meter
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
};

const Home: React.FC = () => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string>("");
  const [isAllowed, setIsAllowed] = useState<boolean>(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(userLocation);

          const distance = getDistance(
            userLocation.latitude!,
            userLocation.longitude!,
            ALLOWED_LOCATION.latitude,
            ALLOWED_LOCATION.longitude
          );

          if (distance <= ALLOWED_LOCATION.radius) {
            setIsAllowed(true);
          } else {
            setIsAllowed(false);
            setError("Anda tidak ada di lokasi tersebut.");
          }
        },
        (error) => {
          setError("Gagal mendapatkan lokasi. Pastikan GPS diaktifkan.");
        }
      );
    } else {
      setError("Geolocation tidak didukung oleh browser ini.");
    }
  }, []);

  const handleAbsensi = () => {
    if (!isAllowed) {
      alert("Anda tidak berada di lokasi MQ.");
    } else {
      alert("Absensi berhasil!");
    }
  };

  return (
    <div className="">
      <h1>Home</h1>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      {location.latitude && location.longitude ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          {/* {isAllowed ? (
            <p>Anda berada di lokasi yang diizinkan.</p>
          ) : (
            <p>Anda tidak ada di lokasi tersebut.</p>
          )} */}
          <button className="bg-blue-500 px-5 py-3 rounded mt-14" onClick={handleAbsensi}>Absen</button>
        </div>
      ) : (
        <p>Sedang mendapatkan lokasi...</p>
      )}
    </div>
  );
};

export default Home;
