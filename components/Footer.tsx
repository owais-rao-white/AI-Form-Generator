import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gradient-to-r from-blue-500 to bg-purple-600 opacity-70"
      style={styles.footer}
    >
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>About Us</h4>
          <p style={styles.text}>
            Formify.AI is your go-to solution for creating dynamic, responsive forms effortlessly
            with the power of AI.
          </p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li>
              <a href="/terms" style={styles.link}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" style={styles.link}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/faq" style={styles.link}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>Email: support@formify.ai</p>
          <p style={styles.text}>Phone: +1 (800) 123-4567</p>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>&copy; 2025 Formify.AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    // background: "linear-gradient(90deg, #d7efff, #e2d6f9, #f6e5f5)",
    width: "150%", // Ensure full width
    padding: "30px 0", // More padding for better spacing
    marginTop: "40px",
    borderTop: "1px solid #ddd",
    color: "#000000",
  },
  container: {
    display: "flex",
    height: "150%", // Ensure full width
    justifyContent: "space-around",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  column: {
    flex: "1",
    margin: "0 15px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    fontFamily: "Arial, sans-serif", // Modern font
    color: "#000000",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    fontFamily: "Arial, sans-serif",
    color: "#000000",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    display: "block",
    marginBottom: "10px",
  },
  bottomBar: {
    textAlign: "center",
    marginTop: "20px",
    paddingTop: "10px",
    borderTop: "1px solid #ddd",
  },
  bottomText: {
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    color: "#000000",
  },
};

export default Footer;
