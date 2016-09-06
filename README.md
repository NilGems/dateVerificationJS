# dateVerificationJS
Verify a date is correct or not. You can verify a date by date of month and choose a maximum and minimum date range.
It is pure javascript base function. Just add this script and call "dataVerificationJS" object function.
({ date:'DD-MM-YYYY', range:{ max:YYYY,min:YYYY } }).dateVerificationJS().
range parameter is optional.
# Example
var dateStatus=({date:'06-09-2016',range:{max:2016,min:1990}}).dateVerificationJS();
# Date error code
- 1 \- Date is not valid
- 2 \- Year is not valid
- 3 \- Year is less then minimum year range
- 4 \- Year is gater then maximum year range
- 5 \- Month is invalid
- 6 \- Date is invalid (\*N.B: If date is less then 0 or greater then 31)
- 7 \- Date is invalid (\*N.B: If date is not valid for this month )
# Dependency
No dependency
# Parameter
## date 
 > This parameter is required
## max
 > Optional parameter
## min
 > Optional parameter
