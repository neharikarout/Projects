import React,{useId} from 'react'


function InputBox({
  label,
  amount,
  onAmountChange, //Method =  whoever  calls it we will talk 
  //about this there too as if state change amount will change too.
  onCurrencyChange,// similar for currency change
  currencyOptions = [], // will use as array loop through but it 
  //dont get crash so we have taken it empty 
  selectCurrency = "usd",
  amountDisable = false, // if user wants to give value or not
  // (recommended for big projects)
  currencyDisable = false,
  className = "",
}) {
  const amountId = useId()
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled = {amountDisable} // fetch value from input
                  value = {amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                  // will fire and event which calls onAmountChange and 
                  //second condition checks whether the function is
                  // available or not then only fire event
                  onAmountChange

              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-ful.l">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled = {currencyDisable}
              >
                  {currencyOptions.map((currency) => (
                      <option key ={currency} value={currency}>
                          {currency}
                      </option>
                    ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;

