import React, { useState } from "react";
import BMICalculator from "../BMICalculator";

function BMICalculatorComponent() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState("");
    const [interpretation, setInterpretation] = useState("");

    const handleCalculate = () => {
        const calculator = new BMICalculator();
        const bmiValue = calculator.calculateBMI(parseFloat(weight), parseFloat(height));
        const interpretationValue = calculator.interpretBMI(bmiValue);

        setBMI(bmiValue.toFixed(2));
        setInterpretation(interpretationValue);
    };

    return (
        <div className="container mx-auto flex flex-col justify-center items-center">
            <h1 className="text-2xl m-4">BMI Calculator</h1>
            <div className="space-y-3">
                <div className="">
                    <label>Weight (kg): </label>
                    <input
                        className=""
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div className="">
                    <label className="">Height (cm): </label>
                    <input
                        className=""
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
            </div>
            <button className="btn btn-info m-5 text-white" onClick={handleCalculate}>Calculate BMI</button>
            {bmi && <p>Your BMI is: {bmi}</p>}
            {interpretation && <p>Interpretation: {interpretation}</p>}
        </div>
    );
}

export default BMICalculatorComponent;