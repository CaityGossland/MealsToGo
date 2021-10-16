import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    } else {
      resolve(locationMock);
    }
  });
};

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const location = formattedResult.results[0].geometry.location;
  const { lat, lng } = location;

  return { lat, lng };
};
