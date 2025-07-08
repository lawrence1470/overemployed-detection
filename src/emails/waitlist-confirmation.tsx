import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

interface WaitlistConfirmationEmailProps {
	email: string;
	employeeCount?: string;
	hrisSystem?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://verifyhire.com";

export const WaitlistConfirmationEmail = ({
	email = "user@example.com",
	employeeCount = "51-200 employees",
	hrisSystem = "Workday",
}: WaitlistConfirmationEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>You're on the VerifyHire waitlist!</Preview>
			<Body
				style={{
					backgroundColor: "#000000",
					fontFamily: "sans-serif",
					margin: "0",
					padding: "0",
				}}
			>
				<Container
					style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}
				>
					{/* Header */}
					<Section style={{ textAlign: "center", marginBottom: "32px" }}>
						<Heading
							style={{
								color: "#ffffff",
								fontSize: "32px",
								fontWeight: "bold",
								marginBottom: "8px",
								margin: "0",
							}}
						>
							VerifyHire
						</Heading>
						<Text style={{ color: "#6b7280", fontSize: "14px", margin: "0" }}>
							Employee Verification
						</Text>
					</Section>

					{/* Main Content Card */}
					<Container
						style={{
							backgroundColor: "#0a0a0a",
							border: "1px solid #1a1a1a",
							borderRadius: "16px",
							padding: "40px",
							marginBottom: "24px",
						}}
					>
						{/* Success Icon */}
						<Section style={{ textAlign: "center", marginBottom: "32px" }}>
							<Text
								style={{
									display: "inline-block",
									background: "linear-gradient(135deg, #22c55e, #16a34a)",
									width: "56px",
									height: "56px",
									borderRadius: "50%",
									color: "#ffffff",
									fontSize: "28px",
									lineHeight: "56px",
									fontWeight: "bold",
									textAlign: "center",
									boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
									margin: "0",
								}}
							>
								✓
							</Text>
						</Section>

						{/* Heading */}
						<Heading
							style={{
								color: "#ffffff",
								fontSize: "28px",
								fontWeight: "bold",
								textAlign: "center",
								marginBottom: "8px",
								margin: "0 0 8px 0",
							}}
						>
							You're on the list!
						</Heading>

						<Text
							style={{
								color: "#9ca3af",
								textAlign: "center",
								marginBottom: "32px",
								fontSize: "16px",
								lineHeight: "1.5",
							}}
						>
							Thank you for joining our waitlist. We'll notify you when we're
							ready for new customers.
						</Text>

						{/* Threat Section */}
						<Section
							style={{
								backgroundColor: "#1a0f08",
								border: "1px solid #3d1f0a",
								borderRadius: "12px",
								padding: "24px",
								marginBottom: "32px",
							}}
						>
							<Heading
								style={{
									color: "#f97316",
									fontSize: "20px",
									fontWeight: "bold",
									textAlign: "center",
									marginBottom: "20px",
									margin: "0 0 20px 0",
								}}
							>
								Understanding the Threat
							</Heading>

							<Row style={{ marginBottom: "24px" }}>
								<Column align="center">
									<Text
										style={{
											color: "#f97316",
											fontSize: "24px",
											fontWeight: "bold",
											margin: "0 0 4px 0",
										}}
									>
										451K+
									</Text>
									<Text
										style={{
											color: "#6b7280",
											fontSize: "12px",
											textTransform: "uppercase",
											letterSpacing: "0.5px",
											margin: "0",
										}}
									>
										r/Overemployed Members
									</Text>
								</Column>
								<Column align="center">
									<Text
										style={{
											color: "#f97316",
											fontSize: "24px",
											fontWeight: "bold",
											margin: "0 0 4px 0",
										}}
									>
										300+
									</Text>
									<Text
										style={{
											color: "#6b7280",
											fontSize: "12px",
											textTransform: "uppercase",
											letterSpacing: "0.5px",
											margin: "0",
										}}
									>
										Daily Fraud Posts
									</Text>
								</Column>
								<Column align="center">
									<Text
										style={{
											color: "#f97316",
											fontSize: "24px",
											fontWeight: "bold",
											margin: "0 0 4px 0",
										}}
									>
										$250K
									</Text>
									<Text
										style={{
											color: "#6b7280",
											fontSize: "12px",
											textTransform: "uppercase",
											letterSpacing: "0.5px",
											margin: "0",
										}}
									>
										Avg. Company Loss
									</Text>
								</Column>
							</Row>

							<Text
								style={{
									color: "#d1d5db",
									textAlign: "center",
									marginBottom: "24px",
									fontSize: "15px",
									lineHeight: "1.6",
								}}
							>
								The r/overemployed community has over 451,000 members openly
								sharing tactics to deceive employers. See the problem for
								yourself.
							</Text>

							<Section style={{ textAlign: "center" }}>
								<Button
									href="https://reddit.com/r/overemployed"
									style={{
										backgroundColor: "#f97316",
										color: "#ffffff",
										fontWeight: "600",
										paddingTop: "16px",
										paddingBottom: "16px",
										paddingLeft: "32px",
										paddingRight: "32px",
										borderRadius: "12px",
										textDecoration: "none",
										boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
									}}
								>
									Explore the Threat Landscape
								</Button>
							</Section>
						</Section>

						{/* Next Steps */}
						<Section
							style={{
								backgroundColor: "#0f0f0f",
								border: "1px solid #1a1a1a",
								borderRadius: "8px",
								padding: "20px",
							}}
						>
							<Heading
								style={{
									color: "#ffffff",
									fontSize: "18px",
									fontWeight: "600",
									marginBottom: "12px",
									margin: "0 0 12px 0",
								}}
							>
								What's Next?
							</Heading>
							<Text
								style={{
									color: "#9ca3af",
									fontSize: "14px",
									margin: "0",
									lineHeight: "1.6",
								}}
							>
								We'll notify you as soon as VerifyHire is ready for new
								customers. In the meantime, stay vigilant about dual employment
								risks in your organization.
							</Text>
						</Section>
					</Container>

					{/* Footer */}
					<Section style={{ textAlign: "center", marginTop: "32px" }}>
						<Text
							style={{
								color: "#4b5563",
								fontSize: "12px",
								margin: "0 0 8px 0",
							}}
						>
							© 2025 VerifyHire • Protecting companies from dual employment
							fraud
						</Text>
						<Text style={{ color: "#4b5563", fontSize: "12px", margin: "0" }}>
							This email was sent to {email} because you joined our waitlist.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

WaitlistConfirmationEmail.PreviewProps = {
	email: "lawrence.nicastro1@gmail.com",
	employeeCount: "51-200 employees",
	hrisSystem: "Workday",
} satisfies WaitlistConfirmationEmailProps;

export default WaitlistConfirmationEmail;
