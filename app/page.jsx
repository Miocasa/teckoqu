"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

function ContactModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-slate-100 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Связаться с нами</h3>
                <p className="text-sm text-slate-300 mt-1">Выберите удобный способ:</p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-300 hover:text-white rounded-md p-1"
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <a
                href="mailto:narimanabdualiev06@gmail.com"
                className="block rounded-lg p-3 bg-white/3 border border-white/6 hover:bg-white/5"
              >
                <div className="text-sm font-medium">Email</div>
                <div className="text-xs text-slate-300">narimanabdualiev06@gmail.com</div>
              </a>

              <a
                href="tel:+77054908891"
                className="block rounded-lg p-3 bg-white/3 border border-white/6 hover:bg-white/5"
              >
                <div className="text-sm font-medium">Телефон</div>
                <div className="text-xs text-slate-300">+7 (705) 490-88-91</div>
              </a>

              <div className="rounded-lg p-3 bg-white/3 border border-white/6">
                <div className="text-sm font-medium">Адрес</div>
                <div className="text-xs text-slate-300">г. Астана, Казахстан</div>
              </div>
            </div>

            <div className="mt-4 text-right">
              <button onClick={onClose} className="px-4 py-2 rounded-lg bg-amber-400 text-slate-900 font-semibold">
                Готово
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_10.8fr] gap-8 items-center bg-white shadow-lg rounded-2xl overflow-hidden">
          
          {/* Left column */}
          <section className="p-10 md:p-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-12 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold">
                Mio
              </div>
              <div>
                <h1 className="text-3xl font-extrabold">Сайт в разработке</h1>
                <p className="mt-1 text-slate-600">
                  Мы создаём красивый и удобный веб-сайт. Скоро будет больше информации.
                </p>
              </div>
            </div>

            <p className="text-slate-700 mt-6">
              Подписывайтесь, чтобы получить уведомление об открытии.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <form
                className="flex flex-col sm:flex-row w-full sm:w-auto gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Спасибо! Мы добавили ваш email.");
                }}
              >
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  placeholder="Ваш email"
                  required
                  className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button
                  className="px-4 py-2 rounded-lg bg-slate-800 text-white font-semibold"
                  type="submit"
                >
                  Подписаться
                </button>
              </form>

              <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50"
              >
                Связаться с нами
              </button>
            </div>


            <div className="mt-6 text-sm text-slate-500">
              Планируемое открытие:{" "}
              <strong className="text-slate-800">31 января 2026</strong>
            </div>
          </section>

          {/* Right column — now visible on all widths */}
          <aside className="mt-4 md:mt-0 flex items-center justify-center bg-gradient-to-br from-[#e6f2ff] to-white p-8 md:p-10">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm"
            >
              <div className="rounded-xl p-6 border border-slate-100 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-slate-400">Статус</div>
                    <div className="text-sm font-semibold text-slate-700">
                      В разработке
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">Готовность</div>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden mb-4">
                  <div
                    className="h-3 rounded-full bg-slate-800"
                    style={{ width: "30%" }}
                  />
                </div>

                <div className="text-sm text-slate-600 mb-6">
                  Работаем над дизайном, backend-ом и тестированием.
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    🚀
                  </div>
                  <div className="text-sm text-slate-600">Скорый запуск</div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>

        <footer className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} MioSpace — Сделано с ♥
        </footer>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
