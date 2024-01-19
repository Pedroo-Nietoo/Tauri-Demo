use tauri::Manager;
use tauri::{
    CustomMenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem, SystemTraySubmenu
};

fn main() {
    let upload_files = CustomMenuItem::new("upload_files".to_string(), "Upload files");
    let file1 = CustomMenuItem::new("file1".to_string(), "File 1");
    let file2 = CustomMenuItem::new("file2".to_string(), "File 2");
    let files_history = SystemTraySubmenu::new("Files history", SystemTrayMenu::new().add_item(file1.clone()).add_item(file2.clone()));
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let close = CustomMenuItem::new("close".to_string(), "Close");

    let tray_menu = SystemTrayMenu::new()
        .add_item(upload_files.clone())
        .add_submenu(files_history)
        .add_item(hide.clone())
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit.clone());

    tauri::Builder::default()
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => {
                let item_handle = app.tray_handle().get_item(&id);
                match id.as_str() {
                    "upload_files" => {
                        println!("HELLO");
                    }
                    "quit" => {
                        std::process::exit(0);
                    }
                    "hide" => {
                        let window = app.get_window("main").unwrap();
                        window.hide().unwrap();
                        item_handle.set_title("Show").unwrap();
                    }
                    "show" => {
                        let window = app.get_window("main").unwrap();
                        window.show().unwrap();
                        item_handle.set_title("Hide").unwrap();
                    }
                    _ => {}
                }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

Desejo que, ao clicar no Upload Files na Tray, o rust faça com que o React renderize o componente <UploadFiles/>use tauri::Manager;
use tauri::{
    CustomMenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem, SystemTraySubmenu
};

fn main() {
    let upload_files = CustomMenuItem::new("upload_files".to_string(), "Upload files");
    let file1 = CustomMenuItem::new("file1".to_string(), "File 1");
    let file2 = CustomMenuItem::new("file2".to_string(), "File 2");
    let files_history = SystemTraySubmenu::new("Files history", SystemTrayMenu::new().add_item(file1.clone()).add_item(file2.clone()));
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let close = CustomMenuItem::new("close".to_string(), "Close");

    let tray_menu = SystemTrayMenu::new()
        .add_item(upload_files.clone())
        .add_submenu(files_history)
        .add_item(hide.clone())
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit.clone());

    tauri::Builder::default()
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => {
                let item_handle = app.tray_handle().get_item(&id);
                match id.as_str() {
                    "upload_files" => {
                        println!("HELLO");
                    }
                    "quit" => {
                        std::process::exit(0);
                    }
                    "hide" => {
                        let window = app.get_window("main").unwrap();
                        window.hide().unwrap();
                        item_handle.set_title("Show").unwrap();
                    }
                    "show" => {
                        let window = app.get_window("main").unwrap();
                        window.show().unwrap();
                        item_handle.set_title("Hide").unwrap();
                    }
                    _ => {}
                }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

Desejo que, ao clicar no Upload Files na Tray, o rust faça com que o React renderize o componente <UploadFiles/>