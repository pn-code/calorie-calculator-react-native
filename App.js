import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [weight, setWeight] = useState();

	return (
		<View style={styles.container}>
			{/* Header */}
			<View>
				<Text style={styles.header}>Calculator</Text>
			</View>
			{/* Form */}
			<View>
				<TextInput
					type="numbers"
					placeholder="Input Weight (lb)"
				></TextInput>
				<Button title="Calculate"></Button>
			</View>
      {/* Text Output */}
      <View>
        <Text>Daily Calorie Expenditure: {`<calories>`}</Text>
        <Text>To Lose Weight: {`<calories>`} - 300-500 calories.</Text>
        <Text>To Gain Weight: {`<calories>`} + 200-300 calories.</Text>
        <Text>To Maintain Weight: {`<calories>`} calories</Text>
      </View>
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
