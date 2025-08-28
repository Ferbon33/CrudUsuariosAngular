
export interface UserRequest {
  email: string;
  name: string;
  password: string;
  phones: {
    citycode: string;
    contrycode: string; // corregir a "countrycode" si tu API lo pide así
    number: string;
  }[];
}