import React, { useEffect, useState } from "react";
import { Snackbar } from "./shared/Snackbar";

export const ConfirmPresence = () => {
  const [fullname, setFullname] = useState("");
  const [guestsCount, setGuestsCount] = useState<number | "">(0);
  const [loading, setLoading] = useState(false);
  const [isAttending, setIsAttending] = useState<boolean | null>(null);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState("");

  const SNACKBAR_TIMEOUT = 3000;

  const resetFields = () => {
    setGuestsCount(0);
    setFullname("");
    setIsAttending(null);
  };

  const validateFields = () => {
    if (!fullname || isAttending === null || !guestsCount) {
      alert("Խնդրում ենք լրացրեք բոլոր դաշտերը");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, guestsCount, isAttending }),
      });

      const data = await response.json();
      setSnackbarContent(data?.message || "Message sent successfully");
      setShowSnackbar(true);
      resetFields();
    } catch (error) {
      console.error("Error sending data:", error);
      setSnackbarContent("Error sending data. Please try again.");
      setShowSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showSnackbar) {
      const timer = setTimeout(() => setShowSnackbar(false), SNACKBAR_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [showSnackbar]);

  return (
    <div className="relative">
      <div className="flex flex-col text-xl px-[12px] my-20 gap-4 items-center">
        <span className="text-center font-bold">
          Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը
        </span>

        <div className="flex flex-col self-start w-full gap-4">
          <label className="flex text-sm items-center gap-2">
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={isAttending === true}
              onChange={() => setIsAttending(true)}
              className="w-5 h-5"
            />
            <span>Կգանք</span>
          </label>
          <label className="flex text-sm items-center gap-2">
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={isAttending === false}
              onChange={() => setIsAttending(false)}
              className="w-5 h-5"
            />
            <span>Չենք կարողանա գալ</span>
          </label>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col w-full gap-2">
          <input
            type="text"
            placeholder="Անուն Ազգանուն"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="border-b-2 border-black px-3 py-2 text-black"
          />
          <input
            type="number"
            min="0"
            placeholder="Հյուրերի քանակը"
            value={guestsCount || ""}
            onChange={(e) => setGuestsCount(Number(e.target.value))}
            className="border-b-2 border-black px-3 py-2 text-black"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-3 rounded-3xl w-full mt-4"
          disabled={loading}
        >
          {loading ? "Ուղարկվում է..." : "Ուղարկել"}
        </button>
      </div>
      {showSnackbar && <Snackbar content={snackbarContent} />}
    </div>
  );
};
