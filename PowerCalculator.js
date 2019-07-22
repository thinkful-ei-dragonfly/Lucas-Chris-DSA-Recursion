var powercalculator = function(base, exponent) 
{
   if (exponent === 0) 
   {
    return 1;
    }
  else 
  {
    return base * powercalculator(base, exponent-1);
  }
};

