package com.anavis.springboot;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;


import com.anavis.springboot.controller.EmergenzaController;
import com.anavis.springboot.model.Calendario;
import com.anavis.springboot.model.Donatore;
import com.anavis.springboot.model.Emergenza;

import com.anavis.springboot.model.Sede;
import com.anavis.springboot.repository.CalendarioRepository;
import com.anavis.springboot.repository.DonatoreRepository;
import com.anavis.springboot.repository.EmergenzaRepository;
import com.anavis.springboot.repository.PrenotazioneRepository;
import com.anavis.springboot.repository.SedeRepository;



@SpringBootApplication
public class AnAvisApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(AnAvisApplication.class, args);
	}

	@Autowired
	private PrenotazioneRepository prenotazioneRepository;
	
	@Autowired
	private EmergenzaRepository emergenzaRepository;
	
	@Autowired
	private DonatoreRepository donatoreRepository;
	
	@Autowired
	private SedeRepository sedeRepository;
	
	@Autowired
	private CalendarioRepository calendarioRepository;
	

	
	@Override
	public void run(String... args) throws Exception {
		
		// main run anavis
		
		String id1 = "sede_001";
		String id2 = "sede_002";
		String id3 = "sede_003";
		String id4 = "sede_004";
		String id5 = "sede_005";
		
		
		Emergenza emergenza = new Emergenza("#emergenza_001", "Macerata", "B");
		Emergenza emergenza2 = new Emergenza("#emergenza_002", "Ancona", "A");
		this.emergenzaRepository.save(emergenza);
		this.emergenzaRepository.save(emergenza2);
		
		
		// Aggiungiamo nuovi donatori con i relativi attributi passati come parametri
		
		this.donatoreRepository.save(new Donatore("Matteo", "Grammatico", "GRMRRM", "Siracusa", "A"));
		this.donatoreRepository.save(new Donatore("Stefano", "Sammarco", "STFSMR", "Cosenza", "B"));
		
		// Aggiungiamo nuove sedi con i relativi attributi
		
		this.sedeRepository.save(new Sede(id1, "Macerata"));
		this.sedeRepository.save(new Sede(id2, "Ancona"));
		this.sedeRepository.save(new Sede(id3, "Fermo"));
		this.sedeRepository.save(new Sede(id4, "Ascoli Piceno"));
		this.sedeRepository.save(new Sede(id5, "Pesaro e Urbino"));
		
		// Aggiungiamo una nuova data per una prenotazione in una specifica sede
		
		this.calendarioRepository.save(new Calendario(id1, "22-02-2021", "Macerata"));
		this.calendarioRepository.save(new Calendario(id2, "07-03-2021", "Ancona"));
		this.calendarioRepository.save(new Calendario(id3, "27-02-2021", "Fermo"));
		this.calendarioRepository.save(new Calendario(id4, "03-03-2021", "Ascoli Piceno"));
		this.calendarioRepository.save(new Calendario(id5, "05-06-2021", "Pesaro e Urbino"));		
		
		
	}

}
