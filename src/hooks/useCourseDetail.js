import { useEffect, useState } from 'react';
import courseApi from "~/api/courseApi";

export default function useCourseDetail(courseId) {
    const [courseDetail, setCourseDetail] = useState({});
    // const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                // setLoading(true);
                const result = await courseApi.get(courseId);
                setCourseDetail(result);
                // console.log(result);
            } catch (error) {
                console.log('Failed to fecth', error);
            }
            // setLoading(false);
        })();
    }, [courseId]);
    return { courseDetail };
}
