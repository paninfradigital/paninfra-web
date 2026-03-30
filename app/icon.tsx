import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#005c97",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M3 22V10L12 3L21 10V22H15V16H9V22H3Z" fill="white" />
          <rect x="10" y="13" width="4" height="4" fill="#ee2e22" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
