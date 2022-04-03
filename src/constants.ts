
/**********************
 * utilities
 *********************/
export const IS_BROWSER: boolean = typeof window !== 'undefined';
export const IS_PROD: boolean = process.env.NODE_ENV === 'production';
export const IS_TEST: boolean = process.env.NODE_ENV === 'test';