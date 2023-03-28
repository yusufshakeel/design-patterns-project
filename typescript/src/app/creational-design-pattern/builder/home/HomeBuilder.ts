// this is the builder interface
interface HomeBuilder {
  withWifi(): void;
  withPowerBackup(): void;
  withGarage(): void;
}
export default HomeBuilder;