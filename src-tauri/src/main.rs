// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rodio::{Decoder, OutputStream, Sink};
//use std::env;
use std::fs::File;
use std::io::BufReader;

#[tauri::command]
async fn play_beep() -> Result<(), ()> {
    let (_stream, stream_handle) =  OutputStream::try_default().unwrap();
    let sink = Sink::try_new(&stream_handle).unwrap();
    let file = BufReader::new(File::open("sounds/beep.mp3").unwrap());

    let source = Decoder::new(file).unwrap();
    sink.append(source);
    sink.sleep_until_end();
    Ok(())
}

#[tauri::command]
async fn play_bell() -> Result<(), ()> {
    let (_stream, stream_handle) =  OutputStream::try_default().unwrap();
    let sink = Sink::try_new(&stream_handle).unwrap();
    let file = BufReader::new(File::open("sounds/box_bell.mp3").unwrap());

    let source = Decoder::new(file).unwrap();
    sink.append(source);
    sink.sleep_until_end();
    Ok(())
}

fn main() {
    //env::set_var("RUST_BACKTRACE", "full");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![play_beep, play_bell])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}