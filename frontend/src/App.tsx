import { useState } from "react";
import ArrayContainer from "./components/ArrayContainer";
import Controls from "./components/Controls";
import "./styles/main.css";

function generateRandomArray(size: number, min: number = 10, max: number = 100): number [] {
	return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

export default function App() {
	const [array, setArray] = useState<number[]>(() => generateRandomArray(10));
	const [arraySize, setArraySize] = useState<number>(10);
	const [speed, setSpeed] = useState<"slow" | "normal" | "fast">("normal");
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [stepMode, setStepMode] = useState<boolean>(false);

	function handleArraySizeChange(size: number) {
		setArraySize(size);
		setArray(generateRandomArray(size));
		setCurrentStep(0);
		setIsPlaying(false);
	}

	function handleGenerateNewArray() {
		setArray(generateRandomArray(arraySize));
		setCurrentStep(0);
		setIsPlaying(false);
	}

	function handleSpeedChange(newSpeed: "slow" | "normal" | "fast") {
		setSpeed(newSpeed);
	}

	function handleStepModeToggle() {
		setStepMode((prev) => !prev);
		setCurrentStep(0);
		setIsPlaying(false);
	}

	return (
		<div className="app">
			<h1>Sorting Visualizer</h1>
			<Controls
				arraySize={arraySize}
				onArraySizeChange={handleArraySizeChange}
				onGenerateNewArray={handleGenerateNewArray}
				speed={speed}
				onSpeedChange={handleSpeedChange}
				stepMode={stepMode}
				onStepModeToggle={handleStepModeToggle}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
			<ArrayContainer array={array} />
		</div>
	);
}
