db.attendance.aggregate([
    { $group: {
        _id: "$user_id",
        total_sessions: { $sum: 1 },
        present_sessions: { $sum: { $cond: [{ $eq: ["$status", "present"] }, 1, 0] } }
    }},
    { $project: {
        user_id: 1,
        attendance_percentage: { $multiply: [{ $divide: ["$present_sessions", "$total_sessions"] }, 100] }
    }},
    { $match: { attendance_percentage: { $lt: 75 } } },
    { $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "student_info"
    }},
    { $unwind: "$student_info" },
    { $project: {
        "student_info.first_name": 1,
        "student_info.last_name": 1,
        "student_info.email": 1,
        "attendance_percentage": 1
    }}
  ]).toArray();
  