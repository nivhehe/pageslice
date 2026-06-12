# PageSlice — Client-Side PDF Extractor, Page Organizer & Document Merger

PageSlice is a high-performance, privacy-first online document utility built to split, delete, organize, or merge PDF pages, images, Word DOCX, and PowerPoint presentations 100% locally in your web browser. 

The user interface follows a modern, dark, telemetry-inspired design (inspired by SpaceX cockpit displays), utilizing condensed typography, real-time feedback gauges, and interactive layouts.

---

## 🔒 Privacy-First Architecture

Unlike traditional online converters that upload sensitive documents to remote servers, PageSlice runs completely inside your browser sandbox memory using HTML5 File APIs, WebAssembly, and local buffer manipulation. 
* **Zero Server Uploads**: Your files never leave your computer.
* **Ephemeral Memory**: Closing the browser tab immediately clears all document buffers from device RAM.
* **No Tracking**: Zero cookies, analytics trackers, or user registrations.

---

## 🚀 Key Features

* **Multi-Format Compilations**: Append and combine PDFs, Word DOCX documents, PowerPoint PPTX presentations, and images (PNG, JPG) simultaneously in a single session.
* **Drag-and-Drop Arranger**: Visually inspect, drag, and reorder page thumbnails to customize the exact compiled document sequence.
* **Precision Extraction & Deletion**: Use text commands (e.g. `1, 3, 5-8`) or real-time text-content search filtering to instantly select or exclude pages.
* **Responsive Control Panel**: Fully responsive layout optimized for desktop, tablet, and mobile Safari/Chrome.
* **Search Engine Optimized (MPA)**: Multi-page application structure including metadata schemas, JSON-LD FAQ integrations, and complete canonical indexing mappings.

---

## 🛠️ Built With

* [Astro](https://astro.build/) — Modern static site generator.
* [Tailwind CSS v4](https://tailwindcss.com/) — Next-generation styling engine.
* [pdf-lib](https://pdf-lib.js.org/) — Client-side PDF modification and page copying.
* [PDF.js](https://mozilla.github.io/pdf.js/) — High-performance document rendering and preview extraction.
* [JSZip](https://stuk.github.io/jszip/) — Client-side XML extraction for office formats.

---

##  Genie Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local development server |
| `npm run build` | Builds optimized production assets to `./dist/` |
| `npm run preview` | Previews the compiled production build locally |

---

## 📧 Support & Collaboration

PageSlice is designed and maintained by **Nived Mohan** ([nivedmohan5423@gmail.com](mailto:nivedmohan5423@gmail.com)). Feel free to collaborate, report issues, or suggest new telemetry systems!
