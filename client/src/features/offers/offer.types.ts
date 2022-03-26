export interface IRootObject {
  info: Info;
  offers: IOffer[];
  recommendations?: any;
  recommendations_v2?: any;
}

export interface IOffer {
  id: string;
  status: string;
  onRequest: boolean;
  unlimited: boolean;
  description: string;
  carGroupInfo: CarGroupInfo;
  vehicleType: string;
  vehicleGroupInfo: CarGroupInfo;
  acrissCode: string;
  prices: Prices;
  splashImages?: SplashImage[];
  images: Images;
  includedCharges: IncludedCharge[];
  payment: Payment;
  sortIndexes: SortIndexes;
  mileageInfo: MileageInfo;
  rentalDays: number;
  rentalHours: number;
  headlines: Headlines;
}

interface Headlines {
  description: string;
  shortSubline: string;
  longSubline: string;
}

interface MileageInfo {
  display: string;
}

interface SortIndexes {
  name: number;
  price: number;
  popularity: number;
  datascience: number;
  subscription: number;
}

interface Payment {
  selectedPaymentOption: string;
  paymentOptions: PaymentOption[];
  paymentRequired: boolean;
}

interface PaymentOption {
  id: string;
  price: BasePrice;
  diffPrice: BasePrice;
  priceBreakdown: PriceBreakdown[];
  crossedOutTotalPrice?: BasePrice;
  cancellationNote: string;
}

interface PriceBreakdown {
  reference: string;
  title: string;
  type: string;
  price?: BasePrice;
  items?: Item[];
}

interface Item {
  reference: string;
  title: string;
  type: string;
  price: BasePrice;
}

interface IncludedCharge {
  title: string;
}

interface Images {
  small: string;
  medium: string;
  large: string;
}

interface SplashImage {
  url: string;
  narrowMedium: string;
  narrowLarge: string;
  wideMedium: string;
  wideLarge: string;
}

interface Prices {
  basePrice: BasePrice;
  totalPrice: BasePrice;
  dayPrice: BasePrice;
  crossedOutTotalPrice?: BasePrice;
  crossedOutDayPrice?: BasePrice;
  promoLabel: string;
  youngDriverFeeApplied: boolean;
  isHourlyBooking: boolean;
}

interface BasePrice {
  prefix: string;
  amount: Amount;
  unit: string;
  taxInfo: string;
  tracking: number;
  trackingNet: number;
}

interface Amount {
  value: number;
  display: string;
  currency: string;
}

interface CarGroupInfo {
  bodyStyleKey: string;
  bodyStyle: string;
  airCondition: boolean;
  automatic: boolean;
  navigationSystem: boolean;
  modelGuaranteed: boolean;
  maxPassengers: number;
  doors: number;
  driverRequirements: DriverRequirements;
  modelExample: ModelExample;
  premium: boolean;
  luxury: boolean;
  baggage: Baggage;
}

interface Baggage {
  bags: number;
  suitcases: number;
}

interface ModelExample {
  name: string;
  imageUrl: string;
  additionalExamples?: string[];
}

interface DriverRequirements {
  minAge: number;
  licenseCategory: string;
  licenseMinYears: number;
  youngDriverAge: number;
}

interface Info {
  rentalInformationUrl: string;
  termsAndConditionsUrl: string;
  dataPrivacyUrl: string;
  taxInformation: string;
  specialApplied: boolean;
  corporateDiscountNumber: number;
  corporateCustomerNumber: number;
  pickupStationId: string;
  returnStationId: string;
  pickupDate: string;
  returnDate: string;
  vehicleType: string;
}
