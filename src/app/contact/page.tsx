import FormularioContato from "@/components/FormularioContato";
import "./page.css";
export default function Page() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#8a2be2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <FormularioContato />
    </main>
  );
}