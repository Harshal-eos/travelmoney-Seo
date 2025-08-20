'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Calculator, Percent } from 'lucide-react';

const VatCalculator: React.FC = () => {
  const [purchaseAmount, setPurchaseAmount] = useState<number>(1000);
  const [vatRate, setVatRate] = useState<number>(20);
  
  const vatAmount = purchaseAmount * (vatRate / 100);
  
  const baseVatAt1000 = 1000 * 0.2;
  
  const effectiveTravelMoneyFeeRate = (1 - (180 / baseVatAt1000)) * 100;
  const effectiveCompetitorFeeRate = (1 - (110 / baseVatAt1000)) * 100;
  
  const travelMoneyRefund = vatAmount * (1 - effectiveTravelMoneyFeeRate / 100);
  const competitorRefund = vatAmount * (1 - effectiveCompetitorFeeRate / 100);
  
  const savings = travelMoneyRefund - competitorRefund;
  // const savingsPercentage = (savings / competitorRefund) * 100;
  
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(amount);
  };
  
  const handlePurchaseChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPurchaseAmount(value);
    }
  };
  
  const handleVatRateChange = (value: number[]): void => {
    setVatRate(value[0]);
  };
  
  return (
    <Card className="shadow-lg border-travel-gray-light overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-travel-blue to-travel-blue-light text-white">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          <CardTitle>VAT Refund Calculator</CardTitle>
        </div>
        <CardDescription className="text-white/90">
          Compare TravelMoney refunds with the competition
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Purchase Amount (€)
          </label>
          <Input
            type="number"
            value={purchaseAmount}
            onChange={handlePurchaseChange}
            min={0}
            step={50}
            className="w-full"
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              VAT Rate
            </label>
            <div className="flex items-center gap-1 text-sm font-medium">
              <Percent className="h-4 w-4" />
              <span>{vatRate}%</span>
            </div>
          </div>
          <Slider
            defaultValue={[vatRate]}
            max={25}
            min={5}
            step={1}
            onValueChange={handleVatRateChange}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>5%</span>
            <span>25%</span>
          </div>
        </div>
        
        <div className="p-4 bg-travel-gray-light/20 rounded-lg space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">VAT Amount</h4>
              <p className="text-xl font-semibold">{formatCurrency(vatAmount)}</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Your Savings</h4>
              <p className="text-xl font-semibold text-travel-blue">{formatCurrency(savings)}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 border-2 border-travel-blue bg-travel-blue/5 rounded-lg flex justify-between items-center shadow-md hover:shadow-lg transition-all">
              <div>
                <h4 className="font-semibold text-lg text-travel-blue">TravelMoney Refund</h4>
                <p className="text-sm text-travel-blue/80">Get up to instant refunds</p>
              </div>
              <p className="text-2xl font-bold text-travel-blue">{formatCurrency(travelMoneyRefund)}</p>
            </div>
            
            <div className="p-3 border border-gray-200 rounded-lg flex justify-between items-center opacity-75">
              <div>
                <h4 className="font-medium text-gray-600">Market Average Refund</h4>
                <p className="text-xs text-muted-foreground">Wait weeks, often months :(</p>
              </div>
              <p className="text-xl font-medium text-gray-600">{formatCurrency(competitorRefund)}</p>
            </div>
          </div>
          
          <div className="text-center py-2">
            <p className="text-sm font-medium">
              Save up to 75% with TravelMoney
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VatCalculator;
