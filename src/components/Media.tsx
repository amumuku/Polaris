import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "",
      linkText: "",
      link: "",
    }

  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2 text-xl"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}
      </div>

      <div className=" text-center">
{/*         打赏地址☕️: 0x84E7d17e64696B5F675EDa4E353f71e510cEf1DB */}
      </div>
    </div>
  );
}
