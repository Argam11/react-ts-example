import {AddressInputParamsOverride} from './AddressInput/AddressInputParamsOverride';
import {AddToCartButtonParamsOverride} from './AddToCartFeeder/AddToCartButtonParamsOverride';
import {AvailableTimeItemParamsOverride} from './AvailableTimeItem/AvailableTimeItemParamsOverride';
import {BookingSummaryParamsOverride} from './BookingSummaryFeeder/BookingSummaryParamsOverride';
import {CartSummaryParamsOverride} from './CartSummaryFeeder/CartSummaryParamsOverride';

const feeders = {
    addToCart: AddToCartButtonParamsOverride,
    addressInput: AddressInputParamsOverride,
    availableTimeItem: AvailableTimeItemParamsOverride,
    bookingSummary: BookingSummaryParamsOverride,
    cartSummary: CartSummaryParamsOverride
};

export default feeders;
