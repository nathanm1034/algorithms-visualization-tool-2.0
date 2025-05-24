interface ControlsProps {
    arraySize: number;
    onArraySizeChange: (size: number) => void;
    onGenerateNewArray: () => void;
    speed: "slow" | "normal" | "fast";
    onSpeedChange: (newSpeed: "slow" | "normal" | "fast") => void;
    stepMode: boolean;
    onStepModeToggle: () => void;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({
    arraySize,
    onArraySizeChange,
    onGenerateNewArray,
    speed,
    onSpeedChange,
    stepMode,
    onStepModeToggle,
    isPlaying,
    setIsPlaying,
}: ControlsProps) {
  return (
    <div className="controls" style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
        {/* Array Size Selector */}
        <label>
            Array Size:&nbsp;
            <select
            value={arraySize}
            onChange={(e) => onArraySizeChange(Number(e.target.value))}
            >
            {[...Array(11)].map((_, i) => {
                const size = i + 5; // 5–15
                return (
                <option key={size} value={size}>
                    {size}
                </option>
                );
            })}
            </select>
        </label>

        <button onClick={onGenerateNewArray}>New Array</button>

        <label>
            Speed:&nbsp;
            <select value={speed} onChange={(e) => onSpeedChange(e.target.value as "slow" | "normal" | "fast")}>
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
            </select>
        </label>

        <label>
            <input
            type="checkbox"
            checked={stepMode}
            onChange={onStepModeToggle}
            />
            Step-by-Step
        </label>
    </div>
  );
}