import {
  Html,
  Head,
  Preview,
  Font,
  Section,
  Heading,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap',
            format: 'woff2',
          }}
        />
        <title>New Contact Message from {name}</title>
      </Head>
      <Preview>You received a new message from {name} via Bunch Studios.</Preview>
      <Section style={{
        backgroundColor: '#f6f5f5',
        padding: '20px',
        fontFamily: '"Poppins", sans-serif',
        color: '#3e3b3b'
      }}>
        <Heading style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#193c89',
        }}>
          📩 New Contact Message
        </Heading>

        <Text><strong>Name:</strong> {name}</Text>
        <Text><strong>Email:</strong> {email}</Text>
        <Text><strong>Message:</strong></Text>
        <Text style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '6px', border: '1px solid #d2cfcf' }}>
          {message}
        </Text>

        <Text style={{ fontSize: '12px', color: '#8b8586', marginTop: '20px' }}>
          This message was sent from the contact form on bunchstudios.in
        </Text>
      </Section>
    </Html>
  );
}
