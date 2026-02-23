export const projects = [
    {
        title: 'IoT Monitoring System',
        slug: 'iot-monitoring-system',
        orientation: 'landscape',
        images: ['/IoT2.jpeg', '/IoT1.jpeg', '/IoT3.jpeg'], // Placeholder for now
        description: 'Sistem IoT penyiraman tanaman otomatis berbasis Fuzzy Logic dengan integrasi dashboard web real time.',
        longDescription: `
            Sistem Internet of Things (IoT) untuk monitoring dan penyiraman tanaman otomatis berbasis ESP32 yang dirancang untuk meningkatkan efisiensi penggunaan air serta mendukung perawatan tanaman secara cerdas.

            Sistem ini mengintegrasikan sensor kelembapan tanah dan sensor suhu–kelembapan udara (DHT11) untuk mengumpulkan data lingkungan secara real-time. Data tersebut diproses menggunakan metode Fuzzy Logic (Mamdani) sehingga keputusan penyiraman dapat dilakukan secara adaptif dengan mempertimbangkan beberapa parameter sekaligus, bukan hanya berdasarkan satu nilai ambang (threshold).

            ESP32 berperan sebagai pusat kendali yang menangani pembacaan sensor, proses inferensi fuzzy, serta kontrol pompa air. Arsitektur sistem juga mendukung pemantauan berbasis web untuk menampilkan kondisi tanaman secara real time.`,

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
        ],
        role: 'Full Stack Developer',
        category: 'IOT & Automation',
        timeline: '2024 (3 Months)'
    },
    {
        title: 'Portofolio Website',
        slug: 'portfolio-website',
        orientation: 'landscape',
        images: ['/porto.png'], // Placeholder
        description: 'Membangun situs web portofolio responsif menggunakan Next.js dan JavaScript, dioptimalkan untuk kinerja dan pengalaman pengguna.',
        longDescription: `
            Website portofolio ini dikembangkan menggunakan Next.js dan React dengan pendekatan modern untuk menghasilkan performa yang optimal serta arsitektur aplikasi yang terstruktur dan scalable.

            Implementasi desain responsif berbasis CSS dengan prinsip mobile-first memastikan tampilan yang konsisten dan nyaman di berbagai perangkat. Animasi scroll memanfaatkan Intersection Observer API untuk menciptakan efek reveal yang ringan dan efisien tanpa membebani performa aplikasi.

            Struktur komponen yang modular dirancang untuk meningkatkan maintainability dan memudahkan pengembangan fitur di masa mendatang. Proyek ini di-deploy menggunakan Vercel guna memastikan proses deployment yang stabil, cepat, dan production-ready.`,
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
        ],
        role: 'Frontend Developer',
        category: 'Portfolio Web',
        timeline: '2024'
    },
    {
        title: 'App Build',
        slug: 'app-build',
        orientation: 'portrait',
        images: ['/app1.jpeg', '/app2.jpeg', '/app3.jpeg'], // Placeholder
        description: 'Aplikasi produktivitas Task & Habit Tracker berbasis React Native yang dirancang untuk meningkatkan konsistensi dan manajemen aktivitas harian.',
        longDescription: `
            Task & Habit merupakan aplikasi mobile berbasis Android yang dikembangkan sebagai proyek pribadi untuk membantu pengguna membangun kebiasaan positif dan mengelola tugas harian secara lebih terstruktur.

Aplikasi ini dirancang dengan pendekatan sederhana dan intuitif agar pengguna dapat fokus pada konsistensi tanpa distraksi. Fitur pelacakan tugas dan kebiasaan dilengkapi dengan sistem pemantauan progres untuk memberikan gambaran perkembangan secara jelas. Selain itu, aplikasi juga menyertakan elemen motivasional guna meningkatkan engagement dan mempertahankan kebiasaan jangka panjang.

Proyek ini menitikberatkan pada clean user experience, performa yang ringan, serta manajemen data lokal yang efisien untuk memastikan aplikasi tetap responsif dan stabil dalam penggunaan sehari-hari.`,
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
        ],
        role: 'Mobile Developer',
        category: 'Productivity App',
        timeline: '2023 - 2024'
    },
    {
        title: 'Website Design Mudiv',
        slug: 'mudiv-uiux',
        orientation: 'landscape',
        images: ['/mudiv1.png', '/mudiv2.png', '/mudiv3.png', '/mudiv4.png',], // Placeholder
        description: 'Desain landing page untuk platform Mudiv yang fokus pada estetika modern dan pengalaman pengguna yang intuitif.',
        longDescription: `
            Proyek ini berfokus pada perancangan antarmuka (UI) dan pengalaman pengguna (UX) untuk website Mudiv dengan pendekatan User-Centered Design. Proses desain dilakukan melalui riset kebutuhan pengguna, analisis alur interaksi, serta kolaborasi tim untuk memastikan solusi yang relevan, intuitif, dan efektif.

            Perancangan navigasi dan struktur informasi dikembangkan secara sistematis guna menciptakan pengalaman yang jelas dan mudah dipahami. Dari sisi visual, proyek ini menerapkan prinsip Visual Branding dengan pendekatan clean design, tipografi yang kuat, serta palet warna hijau yang harmonis untuk membangun identitas brand yang konsisten, profesional, dan mudah dikenali.

            Fokus utama proyek ini adalah menciptakan keseimbangan antara estetika dan fungsionalitas, sehingga desain tidak hanya menarik secara visual tetapi juga mendukung tujuan bisnis dan kebutuhan pengguna secara optimal.`,
        tags: ['Figma', 'UI/UX', 'Landing Page', 'HTML/CSS'],
        link: '#',
        color: '#f43f5e',
        features: [
            'Desain Modern & Responsif',
            'Prototipe Interaktif',
            'Sistem Desain Terstruktur',
            'Riset Pengalaman Pengguna (UX)'
        ],
        technologies: [
            'Figma',
            'User Centered Design',
            'Visual Branding'
        ],
        role: 'UI/UX Designer',
        category: 'Web Design',
        timeline: '2024'
    },
    {
        title: 'Website Diskominfo',
        slug: 'diskominfo-website',
        orientation: 'landscape',
        images: ['/ko1.png', '/ko2.png', '/ko3.png', '/ko4.png'], // Placeholder
        description: 'Pengembangan sistem informasi untuk lembaga pemerintahan DISKOMINFO menggunakan framework CodeIgniter 2.5 dengan fokus pada manajemen data.',
        longDescription: `
            Proyek ini merupakan pengembangan Website Resmi dan Sistem Informasi Internal untuk Dinas Komunikasi dan Informatika (Diskominfo), yang dirancang sebagai platform terintegrasi untuk mendukung pelayanan informasi publik sekaligus pengelolaan data internal organisasi.

Sistem menggabungkan fungsi portal informasi publik dengan dashboard administrasi internal dalam satu arsitektur aplikasi yang terstruktur. Pendekatan ini memungkinkan pengelolaan konten, data, dan informasi dilakukan secara lebih efisien, terpusat, serta mendukung transparansi layanan kepada masyarakat.

Aplikasi dikembangkan menggunakan PHP dengan framework CodeIgniter 2.5 dan dirancang dengan struktur modular untuk menjaga maintainability serta stabilitas sistem. Implementasi dashboard internal membantu optimalisasi proses administrasi dan manajemen data secara sistematis.`,
        tags: ['CodeIgniter 2.5', 'PHP', 'MySQL', 'Bootstrap'],
        link: '#',
        color: '#10b981',
        features: [
            'Manajemen User & Role',
            'Form Pengajuan Kebutuhan Desa',
            'Manajemen Inventaris Otomatis',
            'Optimasi Database'
        ],
        technologies: [
            'CodeIgniter 2.5',
            'PHP',
            'MySQL',
            'Bootstrap 3',
            'XAMPP'
        ],
        role: 'Full Stack Developer',
        category: 'Government System',
        timeline: '2023'
    },
];
