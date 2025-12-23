import { Toaster } from "react-hot-toast";

export default function ToasterApp() {
  return (
    <div>
      <Toaster
        position="top-center"
        containerStyle={{
          top: 85,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#ebc6d3ff',
            color: '#3f3c6eff',
            borderRadius: '8px',
            padding: '12px 16px',
            fontSize: '0.9rem',
          },
          iconTheme: {
            primary: '#3f3c6eff',
            secondary: '#fbddf3',
          },
          error: {
            style: {
              background: '#fcd5d5',
              color: '#b91c1c',
              borderRadius: '8px',
              padding: '12px 16px',
            },
          },
        }}
      />
    </div>
  );
}
