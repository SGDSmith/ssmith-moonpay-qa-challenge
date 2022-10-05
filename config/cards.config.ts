import * as dotenv from 'dotenv';
dotenv.config();

export default {

    ValidCard: process.env.CARD_SUCCESS ?? '',
    DeclinedCard: process.env.CARD_DECLINED ?? '',
    AuthenticationRequiredCard: process.env.CARD_AUTHENTICATION_REQUIRED ?? '',
    InsufficientFundsCard: process.env.CARD_INSUFFICIENT_FUNDS ?? ''
    
}