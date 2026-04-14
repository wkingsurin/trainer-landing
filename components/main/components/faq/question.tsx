import { motion, AnimatePresence } from "framer-motion";
import { IQuestion } from "@/lib/store/faq.store";
import { Plus } from "lucide-react";

interface IProps {
	data: IQuestion;
	active: boolean;
  isMobile: boolean;
	onClick: (id: string) => void;
}

export default function Question({ data, active, isMobile, onClick }: IProps) {
	const activeStyle = active && "text-accent hover:text-accent!";

	return (
		<li
			key={data.id}
			className="group flex flex-col w-full min-h-[60px] overflow-hidden"
			onClick={() => onClick(data.id)}
		>
			<div
				className={`flex justify-between items-center w-full text-[18px] cursor-pointer p-[15px] gap-[10px] trainsiton duration-[0.3s] hover:text-accent-900 ${activeStyle}`}
			>
				<div className="flex flex-col gap-1">{isMobile ? data.text.split('|').map((string) => <p key={string}>{string.trim()}</p>) : data.text.split('|').join('')}</div>
				<motion.div
					animate={{ rotate: active ? 45 : 0 }}
					transition={{ duration: 0.2 }}
				>
					<Plus className={`size-6 min-w-[24px]`} />
				</motion.div>
			</div>

			<AnimatePresence initial={false}>
				{active && (
					<motion.div
						key="content"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<div className="pb-[15px] px-[40px] pt-0 text-base flex flex-col gap-3">
							{data.answer.split("|").map((string) => (
								<p key={string}>{string}</p>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</li>
	);
}
