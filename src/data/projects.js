export const projects = [
    {
        title: 'IoT Monitoring System',
        slug: 'iot-monitoring-system',
        orientation: 'landscape',
        images: ['/IoT2.jpeg', '/IoT1.jpeg', '/IoT3.jpeg'], // Placeholder for now
        description: 'Sistem IoT penyiraman tanaman otomatis berbasis Fuzzy Logic dengan integrasi dashboard web real-time.',
        longDescription: `
            Proyek ini merupakan sistem Internet of Things (IoT) untuk monitoring dan penyiraman tanaman otomatis berbasis ESP32. Sistem mengintegrasikan sensor kelembapan tanah dan sensor suhu serta kelembapan udara (DHT11) untuk mengumpulkan data kondisi lingkungan secara real-time.

            Data yang diperoleh dari sensor diproses menggunakan metode Fuzzy Logic (Mamdani) untuk menentukan keputusan penyiraman yang lebih adaptif dan akurat dibandingkan metode threshold konvensional. Pendekatan ini memungkinkan sistem mempertimbangkan beberapa parameter sekaligus, seperti tingkat kelembapan tanah dan suhu udara, sebelum mengaktifkan pompa air.

            ESP32 berperan sebagai mikrokontroler utama yang membaca data sensor, memproses logika fuzzy, dan mengontrol aktuator penyiraman. Sistem juga dirancang untuk dapat dimonitor melalui antarmuka berbasis web sehingga pengguna dapat melihat kondisi tanaman secara real-time.

Proyek ini bertujuan untuk meningkatkan efisiensi penggunaan air serta membantu perawatan tanaman secara otomatis dan lebih cerdas.`,

        tags: ['C/C++', 'FastAPI', 'WebSocket', 'ESP32', 'Fuzzy Logic'],
        link: '#',
        color: '#3b82f6',
        features: [
            'Otomatisasi penyiraman berbasis Fuzzy Logic',
            'Monitoring real-time suhu dan kelembaban',
            'Dashboard Web Responsif dengan data yang real-time',
            'Fuzzy Logic Sebagai perhitungan waktu penyiraman',
        ],
        technologies: [
            'ESP32 Control Unit',
            'DHT11, Soil Mousture & DS18b20',
            'FastAPI Server',
            'WebSocket',
            'HTML/CSS For UI Website',
            'Monitoring Data',
            'Use Fuzzy Logic for Accurate Decision'
        ]
    },
    {
        title: 'Portofolio Website',
        slug: 'portfolio-website',
        orientation: 'landscape',
        images: ['/porto.png'], // Placeholder
        description: 'Membangun situs web portofolio responsif menggunakan Next.js dan JavaScript, dioptimalkan untuk kinerja dan pengalaman pengguna.',
        longDescription: `
        Website portofolio ini dibangun menggunakan Next.js dan React dengan pendekatan modern untuk menghasilkan performa yang optimal serta struktur aplikasi yang terorganisir dengan baik. Styling responsif berbasis CSS diterapkan dengan prinsip mobile first untuk memastikan tampilan yang konsisten dan nyaman di berbagai perangkat. Animasi scroll diimplementasikan menggunakan Intersection Observer guna menciptakan efek reveal yang ringan, halus, dan tetap menjaga efisiensi performa.
        
        Struktur komponen yang modular memudahkan pengembangan dan pemeliharaan kode, serta meningkatkan skalabilitas proyek. Website ini di-deploy melalui Vercel untuk memastikan stabilitas, kemudahan deployment, dan performa yang andal dalam lingkungan production.  `,
        tags: ['Next.js', 'JavaScript', 'Vs Code', 'Framer Motion'],
        link: '#',
        color: '#06b6d4',
        features: [
            'Desain Responsif (Mobile-first)',
            'Animasi Scroll Reveal yang Halus',
            'Arsitektur Berbasis Komponen',
            'Optimasi Performa Bawaan Next.js',
            'Deployment menggunakan Vercel'
        ],
        technologies: [
            'Next.js',
            'React',
            'CSS',
            'Intersection Observer',
            'Vercel Hosting',
            'java script',
            'ESLint',
        ]
    },
    {
        title: 'App Build',
        slug: 'app-build',
        orientation: 'portrait',
        images: ['/app1.jpeg', '/app2.jpeg', '/app3.jpeg'], // Placeholder
        description: 'Aplikasi produktivitas Task & Habit Tracker berbasis React Native yang dirancang untuk meningkatkan konsistensi dan manajemen aktivitas harian.',
        longDescription: `
            Aplikasi mobile Task & Habit ini merupakan proyek pribadi yang bertujuan membantu pengguna
            membangun kebiasaan positif dan mengelola tugas harian secara lebih terstruktur. Dibangun menggunakan React Native dan difokuskan untuk platform Android, aplikasi  ini menyediakan 
            fitur pelacakan tugas dan kebiasaan dengan tampilan yang sederhana dan mudah digunakan 
            untuk mendukung konsistensi pengguna.
        `,
        tags: ['React Native', 'JavaScript', 'Vs Code', 'Expo Go'],
        link: '#',
        color: '#8b5cf6',
        features: [
            'Tugas dan Kebiasaan',
            'Statistik Kemajuan',
            'Kalimat Motivasi',
            'Lokal Storage'
        ],
        technologies: [
            'React Native',
            'Expo Go',
            'Local Storage',
            'Task & Habit Management Logic'
        ]
    },
];
