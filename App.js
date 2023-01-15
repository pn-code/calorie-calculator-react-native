import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [weight, setWeight] = useState();
	const [calories, setCalories] = useState();

	const onPressCalculate = () => {
		setCalories(weight * 15);
	};

	return (
		<View style={styles.container}>
			{/* Header */}
			<View>
				<Text style={styles.header}>Calculator</Text>
			</View>
			{/* Form */}
			<View>
				<TextInput
					onChangeText={setWeight}
					keyboardType="number-pad"
					maxLength={4}
					placeholder="Input Weight (lb)"
					value={weight}
				></TextInput>
				<Button onPress={onPressCalculate} title="Calculate" />
			</View>
			{/* Text Output */}
			{calories != 0 && (
				<View>
					<Text>Daily Calorie Expenditure: {calories} </Text>
					<Text>
						To Lose Weight:{" "}
						{`${calories - 300} - ${calories - 500}`} calories.
					</Text>
					<Text>
						To Gain Weight:{" "}
						{`${calories + 300} - ${calories + 500}`} calories.
					</Text>
					<Text>To Maintain Weight: {calories} calories.</Text>
				</View>
			)}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		backgroundColor: "red",
		fontSize: "42",
	},
});
