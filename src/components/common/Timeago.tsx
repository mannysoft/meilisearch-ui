"use client";
import { cn } from "@/lib/cn";
import { getTimeAgo, getTimeText } from "@/utils/text";
import dayjs from "dayjs";
import { type FC, useState } from "react";
interface Props {
	className?: string;
	date?: Date;
}

export const TimeAgo: FC<Props> = ({ className = "", date }) => {
	const [isHover, setIsHover] = useState(false);
	// Check for null/undefined and validate date before using it
	if (date == null) {
		return <div className={cn("w-fit h-fit", className)}>-</div>;
	}
	const dayjsDate = dayjs(date);
	if (!dayjsDate.isValid()) {
		return <div className={cn("w-fit h-fit", className)}>-</div>;
	}
	return (
		<div
			className={cn("w-fit h-fit", className)}
			onMouseEnter={() => {
				setIsHover(true);
			}}
			onMouseLeave={() => {
				setIsHover(false);
			}}
		>
			{isHover ? getTimeText(date) : getTimeAgo(date)}
		</div>
	);
};
