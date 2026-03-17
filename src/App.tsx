"use client";

import React, { useState, useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";
import { motion, AnimatePresence } from "framer-motion";

import { Default, Nineties } from "./views";

function App() {
	const [isNineties, setIsNineties] = useState(false);
	const [curtainPhase, setCurtainPhase] = useState<null | "in" | "out">(null);

	const handle90sToggle = (): void => {
		if (curtainPhase) return;
		setCurtainPhase("in");
	};

	const onCurtainInComplete = () => {
		setIsNineties((prev) => !prev);
		setCurtainPhase("out");
	};

	const onCurtainOutComplete = () => {
		setCurtainPhase(null);
	};

	useEffect(() => {
		if (isNineties) {
			// @ts-expect-error Parameter 'name' implicitly has an 'any' type.ts(7006)
			new fairyDustCursor({ colors: ["red", "blue"] });
		}
	}, [isNineties]);

	const curtainColor = isNineties ? "#fde047" : "#000";

	return (
		<div className="App">
			{isNineties ? (
				<Nineties isNineties={isNineties} handle90sToggle={handle90sToggle} />
			) : (
				<Default isNineties={isNineties} handle90sToggle={handle90sToggle} />
			)}

			<AnimatePresence>
				{curtainPhase === "in" && (
					<motion.div
						key="curtain"
						className="fixed inset-0 z-9999"
						style={{ backgroundColor: curtainColor }}
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						onAnimationComplete={onCurtainInComplete}
					/>
				)}
				{curtainPhase === "out" && (
					<motion.div
						key="curtain-out"
						className="fixed inset-0 z-9999"
						style={{ backgroundColor: curtainColor }}
						initial={{ x: 0 }}
						animate={{ x: "100%" }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						onAnimationComplete={onCurtainOutComplete}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}

export default App;
