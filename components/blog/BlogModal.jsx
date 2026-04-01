"use client"

import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

export default function BlogModal({ blog, onClose }) {

    if (!blog) return null

    return createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-6"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: .95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: .95, opacity: 0 }}
                    className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                {blog.category}
                            </span>

                            <h2 className="text-3xl font-bold mt-4 text-slate-900">
                                {blog.title}
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                {blog.readTime}
                            </p>
                        </div>

                        <button onClick={onClose} className="text-xl">
                            ✕
                        </button>
                    </div>

                    <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                        {blog?.content
                            ?.split("\n")
                            .filter(p => p.trim() !== "")
                            .map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body   // 🔥 THIS IS THE FIX
    )
}