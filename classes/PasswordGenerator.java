/* Copyright 2016 Jordan Bottoms

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/
import java.util.Scanner;
import java.util.Random;
import java.awt.*;
import javax.swing.*;
import javax.swing.event.*;
import java.awt.event.*;

public class PasswordGenerator extends JFrame
{
	private JTextField passBox;
	private JButton generatePw;
	private JButton close;
	private JPanel panel;
	final int WINDOW_WIDTH = 310;
	final int WINDOW_HEIGHT = 100;
	
	public PasswordGenerator()
	{
		setTitle("Password Generator");
		setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
		setResizable(false);
		setLocationRelativeTo(null);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		panelBuilder();
		add(panel);
		setVisible(true);
	}
	
	private void panelBuilder()
	{
		passBox = new JTextField(16);
		generatePw = new JButton("Generate Password");
		close = new JButton("Close");
		
		generatePw.addActionListener(new generatePwButton());
		close.addActionListener(new closeButton());
		panel = new JPanel();
		
		panel.add(passBox);
		panel.add(generatePw);
		panel.add(close);
		
	}
	/* Following class generates the password:
	 * A. starts by declaring variables
	 * B. start the while loop using the defined size and checking
	 * the string length in order to decide to continue
	 * C. Creates a new instance of the random class which
	 * creates a random number between 0 and 2 
	 * for deciding on lower or uppecase and numbers.
	 * */
	private class generatePwButton implements ActionListener
	{
		public void actionPerformed(ActionEvent e)
		{
			char c;
			int casing;
			
			String password = "";
			int size = 16;
			
			while(password.length() < size)
			{
				Random number = new Random();
				casing = number.nextInt(3);
				
				if (casing == 0)
				{
					c = (char) (Math.random() * 26 + 97);
					password = password + c;
				}
				if(casing == 1)
				{
					c = (char) (Math.random() * 9 + 48);
					password = password + c;
				}
				else
				{
					c = (char) (Math.random() * 26 + 65);
					password = password + c;
				}
				
			}
			passBox.setText(password);
		
		}
	}	
	
private class closeButton implements ActionListener
{
	public void actionPerformed(ActionEvent e)
	{
		System.exit(0);
	}
}
	
	public static void main(String[] args)
	{
		new PasswordGenerator();
	}
}
