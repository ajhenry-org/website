/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "@ajhenry";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function OgImage() {
  // Font
  const interSemiBold = fetch(
    new URL("./Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rbg(45, 55, 72)",
          color: "white",
        }}
      >
        <img
          src="http://localhost:3000/images/avatar.png"
          alt={alt}
          style={{
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "2rem",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 600,
              padding: 0,
              margin: 0,
            }}
          >
            Andrew Henry
          </h1>
          <span style={{ display: "flex", alignItems: "center" }}>
            <svg
              width="52px"
              height="52px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 600,
                padding: 0,
                margin: 0,
                marginLeft: "1rem",
              }}
            >
              @ajhenry
            </h2>
          </span>
        </div>
        <p
          style={{
            fontSize: "3rem",
            fontWeight: 600,
            position: "absolute",
            bottom: 0,
            right: 0,
            padding: "0.5rem",
            margin: 0,
          }}
        >
          ajhenry.com
        </p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
