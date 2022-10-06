import * as dotenv from 'dotenv';
dotenv.config();

export default {

    RunVisualTests: process.env.RUN_VISUAL_TESTS ?? 'false',
    VisualTestFW: process.env.VISUAL_TEST_FW ?? '',
    
}