import React, { useState } from 'react';
import useStore from '../store/useStore';
import {
    Users,
    UserCheck,
    UserX,
    Clock,
    TrendingUp,
    TrendingDown
} from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';



const StatCard = React.memo(({ label, value, subtext, icon: Icon, color, trend, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Monochromatic with strategic accents
    const colorStyles = {
        blue: { iconColor: '#2563EB', accentColor: 'rgba(37, 99, 235, 0.1)' },
        green: { iconColor: '#059669', accentColor: 'rgba(5, 150, 105, 0.1)' },
        red: { iconColor: '#DC2626', accentColor: 'rgba(220, 38, 38, 0.1)' },
        amber: { iconColor: '#D97706', accentColor: 'rgba(217, 119, 6, 0.1)' },
    };

    const style = colorStyles[color];

    // Card container variants - Orchestrated entrance
    const cardVariants = {
        initial: { opacity: 0, y: 20, scale: 0.98 },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1, // Stagger between cards
                ease: [0.16, 1, 0.3, 1],
                when: "beforeChildren", // Card box appears first/simultaneously but triggers children
                staggerChildren: 0.1, // content inside flows out
                delayChildren: 0.1
            }
        },
        hover: {
            transition: { staggerChildren: 0.05 }
        }
    };

    // Icon variants - purposeful motion for feedback
    const iconVariants = {
        initial: { opacity: 0, x: -10 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        },
        hover: {
            scale: 1.15,
            rotate: [0, -8, 8, 0], // Wiggle effect
            transition: {
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1] // Spring easing for playful feel
            }
        }
    };

    // Number variants - focus attention
    const numberVariants = {
        initial: { y: 15, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 150,
                damping: 15
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                type: 'spring',
                stiffness: 400,
                damping: 17
            }
        }
    };

    // Trend badge variants
    const badgeVariants = {
        initial: { opacity: 0, scale: 0.8, x: 10 },
        animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 200,
                damping: 20
            }
        },
        hover: {
            scale: 1.1,
            y: -2,
            transition: {
                duration: 0.2,
                type: 'spring',
                stiffness: 500,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="card relative cursor-pointer group overflow-hidden flex flex-col justify-between"
            role="article"
            aria-label={`${label}: ${value}. ${subtext}${trend ? `. Trend: ${trend === 'up' ? 'increasing by 12%' : 'decreasing by 2%'}` : ''}`}
            tabIndex={0}
            style={{
                minHeight: '220px',
                padding: '32px',
            }}
        >


            {/* Accent bar */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 right-0 h-[3px] origin-left z-10"
                style={{ background: style.iconColor }}
            />

            <div className="relative z-10">
                {/* Header Row: Icon + Trend */}
                <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <motion.div variants={iconVariants}>
                        <motion.div
                            animate={{
                                backgroundColor: isHovered ? style.accentColor : 'transparent'
                            }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex p-2.5 rounded-xl"
                        >
                            <Icon
                                size={28}
                                strokeWidth={2.5}
                                style={{ color: style.iconColor }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Trend Badge */}
                    {trend && (
                        <motion.div
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-bold antialiased border backdrop-blur-sm"
                            variants={badgeVariants}
                            style={{
                                color: trend === 'up' ? '#059669' : '#DC2626',
                                background: trend === 'up' ? 'rgba(5, 150, 105, 0.06)' : 'rgba(220, 38, 38, 0.06)',
                                borderColor: trend === 'up' ? 'rgba(5, 150, 105, 0.15)' : 'rgba(220, 38, 38, 0.15)',
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: trend === 'up' ? [-1, 1, -1] : [1, -1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {trend === 'up' ? <TrendingUp size={14} strokeWidth={2.5} /> : <TrendingDown size={14} strokeWidth={2.5} />}
                            </motion.div>
                            {trend === 'up' ? '+12%' : '-2%'}
                        </motion.div>
                    )}
                </div>

                {/* Value */}
                <motion.div
                    className="antialiased font-bold text-ink mb-2 tracking-tight"
                    variants={numberVariants}
                    style={{
                        fontSize: 'clamp(3rem, 4vw, 3.5rem)', // Fluid text for value
                        lineHeight: 1,
                        fontFeatureSettings: '"tnum", "ss01"',
                    }}
                >
                    {value}
                </motion.div>

                {/* Label */}
                <motion.div
                    className="antialiased text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
                    animate={{
                        y: isHovered ? -2 : 0,
                        color: isHovered ? '#52525B' : '#71717A'
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {label}
                </motion.div>
            </div>

            {/* Subtext */}
            <motion.div
                className="antialiased text-sm text-stone-400 leading-relaxed relative z-10 font-medium"
                animate={{
                    opacity: isHovered ? 1 : 0.7
                }}
                transition={{ duration: 0.2 }}
            >
                {subtext}
            </motion.div>
        </motion.div>
    );
});

StatCard.displayName = 'StatCard';

const DashboardCards = React.memo(() => {
    const { employees, attendance, loading } = useStore();

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                    <motion.div
                        key={i}
                        className="card"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        style={{
                            minHeight: '220px',
                        }}
                    />
                ))}
            </div>
        );
    }

    const totalEmployees = employees.length;
    const today = new Date().toISOString().split('T')[0];
    const todayRecords = attendance.filter(a => a.date && a.date.startsWith(today));
    const presentCount = todayRecords.filter(a => a.status === 'Present').length;
    const absentCount = todayRecords.filter(a => a.status === 'Absent').length;
    const attendanceRate = totalEmployees > 0 ? Math.round((presentCount / totalEmployees) * 100) : 0;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
                index={0}
                label="Total Employees"
                value={totalEmployees}
                subtext={employees.length > 0 ? '+2 new this month' : 'No employees yet'}
                icon={Users}
                color="blue"
                trend="up"
            />
            <StatCard
                index={1}
                label="Present Today"
                value={presentCount}
                subtext="Checked in on time"
                icon={UserCheck}
                color="green"
                trend="up"
            />
            <StatCard
                index={2}
                label="Absent / Leave"
                value={absentCount}
                subtext="Total not active"
                icon={UserX}
                color="red"
                trend="down"
            />
            <StatCard
                index={3}
                label="Attendance Rate"
                value={`${attendanceRate}%`}
                subtext="Daily active workforce"
                icon={Clock}
                color="amber"
            />
        </div>
    );
});

DashboardCards.displayName = 'DashboardCards';

export default DashboardCards;
